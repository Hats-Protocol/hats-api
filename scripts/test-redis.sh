#!/bin/bash

# Script to manage Redis test container

ACTION=${1:-start}

case $ACTION in
  start)
    echo "Starting Redis test container..."
    docker-compose -f docker-compose.test.yml up -d
    echo "Waiting for Redis to be ready..."
    sleep 2
    docker-compose -f docker-compose.test.yml exec -T redis-test redis-cli -a testpassword123 ping
    if [ $? -eq 0 ]; then
      echo "Redis test container is ready!"
    else
      echo "Failed to connect to Redis test container"
      exit 1
    fi
    ;;
  stop)
    echo "Stopping Redis test container..."
    docker-compose -f docker-compose.test.yml down
    ;;
  logs)
    docker-compose -f docker-compose.test.yml logs -f
    ;;
  *)
    echo "Usage: $0 {start|stop|logs}"
    exit 1
    ;;
esac