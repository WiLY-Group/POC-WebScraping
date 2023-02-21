from __init__ import key_usda
import requests
from pprint import pprint

params = {"api_key": key_usda, "pageSize": 25}
url = "https://api.nal.usda.gov/fdc/v1/foods/list"

response = requests.get(url=url, params=params)
pprint(response.json()[1])

with open("food_item.json", "w") as file:
    file.write(str(response.json()[1]).replace("\'", "\""))

for i in range(1, 10):
    item = response.json()[i]
    name = item["description"].replace(" ", "_")
    path = f"scraped_data/{name}.json"
    with open(path, "w") as file:
        file.write(str(item).replace("\'", "\""))
