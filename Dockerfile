# Use Node.js 18 with Alpine as the base image for building
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
# This layer is cached unless package.json changes
COPY package.json package-lock.json ./
RUN npm ci

# Copy application code
COPY . .

# Build the Next.js application
RUN npm run build

# Production image - use the smallest possible base
FROM node:18-alpine AS runner

# Install only wget (smaller than curl) for health checks
RUN apk add --no-cache wget && \
    # Clean up the apk cache to reduce image size
    rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production \
    PORT=3000 \
    # Disable Next.js telemetry for smaller footprint
    NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the necessary files from the builder stage
# Only copy the minimal required files for production
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Create a simple health check file
RUN echo "OK" > ./public/health.txt

# Set the user to non-root
USER nextjs

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["node", "server.js"]