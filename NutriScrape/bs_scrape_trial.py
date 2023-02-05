import requests
from bs4 import BeautifulSoup

url = "https://www.example.com/nutritional-info"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Extract the information you want from the page
nutritional_info = soup.find("div", {"class": "nutritional-info"})
calories = nutritional_info.find("p", {"class": "calories"}).text
fat = nutritional_info.find("p", {"class": "fat"}).text

print("Calories: ", calories)
print("Fat: ", fat)