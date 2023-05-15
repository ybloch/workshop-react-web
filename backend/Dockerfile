FROM python:3.10-slim 

WORKDIR backend/

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY backend/ . 

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
