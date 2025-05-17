# Use official Python image
FROM python:3.11

# Set work directory
WORKDIR /app

# Copy dependencies
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy all other files
COPY . .

# Expose port Django runs on
EXPOSE 5000

# Run the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:5000"]