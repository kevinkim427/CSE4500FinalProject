
from selenium import webdriver
import time

def findText(driver, keyword):
    if keyword.lower() in driver.page_source.lower():
        # print(driver.page_source)
        return True
    else:
        return False

def userAction(driver):
    total_reward_time = 0
    reward_time = 10
    helper = ["students", "another"]
    print("in userAction")
    for item in helper:
        if findText(driver, item):
            total_reward_time += reward_time
    time.sleep(total_reward_time)

def main():
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    reward_time = 10
    total_reward_time = 0
    keywords = ["student","another"]
    print("IN KEYWORD USER")
    for keyword in keywords:
        if findText(driver, keyword):
            print("found",keyword)
            time.sleep(reward_time)
            total_reward_time += reward_time
        else:
            print("not found")
    driver.quit()



if __name__ == "__main__":
    main()
