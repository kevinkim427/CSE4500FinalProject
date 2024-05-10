from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import random
import time

def userAction(driver):
    # random user variables
    reward_time = 10
    total_reward_time = 0

    # get all images from document
    lists = driver.find_elements(by=By.TAG_NAME, value='li')
    images = driver.find_elements(by=By.TAG_NAME, value='img')

    # add multiples of 10 to presence time for each link found
    total_reward_time += reward_time * len(lists)
    #subtract 5 seconds for every image found
    total_reward_time += reward_time * len(images)
    time.sleep(total_reward_time)
