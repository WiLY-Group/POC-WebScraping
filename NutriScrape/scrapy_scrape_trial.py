import scrapy

class NutritionalInfoSpider(scrapy.Spider):
    name = "nutritional_info"
    start_urls = [
        'https://fdc.nal.usda.gov/',
    ]

    def parse(self, response):
        calories = response.css("p.calories::text").get()
        fat = response.css("p.fat::text").get()

        yield {
            'Calories': calories,
            'Fat': fat,
        }

# Run by entering scrapy runspider .\scrapy_scrape_trial.py