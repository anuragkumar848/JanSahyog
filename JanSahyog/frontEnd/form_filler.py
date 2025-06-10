
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

# Set up Chrome WebDriver
def start_browser():
    options = Options()
    options.add_argument("--start-maximized")
    service = Service()  # Assumes chromedriver is in PATH
    driver = webdriver.Chrome(service=service, options=options)
    return driver

# Fill a field with Selenium
def fill_form_field(field, value):
    global browser
    try:
        if not browser:
            print("Browser not initialized.")
            return
        print(f"Filling {field} with {value}...")

        # Search input elements and try to match the placeholder/label/id/name
        inputs = browser.find_elements(By.TAG_NAME, "input")
        for inp in inputs:
            for attr in ['placeholder', 'aria-label', 'name', 'id']:
                try:
                    if inp.get_attribute(attr) and field.lower() in inp.get_attribute(attr).lower():
                        inp.clear()
                        inp.send_keys(value)
                        print(f"Filled {field} in element with {attr}")
                        return
                except:
                    continue
        print(f"No input field matched for {field}")
    except Exception as e:
        print(f"Error filling field {field}: {e}")

browser = None

def open_form_url(url):
    global browser
    browser = start_browser()
    browser.get(url)
    time.sleep(3)  # Wait for page to load
