import requests

BOT_TOKEN = "8053184406:AAEPxoQCNogBz79hQ20xPsGNbJWhejDW0hw"
CHAT_ID = "6664016267"

url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
data = {"chat_id": CHAT_ID, "text": "Hello! Test message from Python"}

response = requests.post(url, data=data)
print(response.json())
