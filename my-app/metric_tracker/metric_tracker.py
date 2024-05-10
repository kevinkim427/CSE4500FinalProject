import time
import collections
import csv
from selenium import webdriver
from pymongo import MongoClient
from testg import user61 as user

mc = MongoClient('mongodb://localhost:27017/')
db = mc['reactpage']

def writeToCSV(filename : str, metrics : dict):
    with open(file = filename, mode="w", newline="") as fp:
        writer = csv.DictWriter(fp, fieldnames=metrics.keys())
        writer.writeheader()
        writer.writerow(metrics)

def main():
    react_coll = db['Iterations']
    # Initialize browser
    driver = webdriver.Edge()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    metrics = collections.defaultdict(list)

    start_time = time.time()    
    user.userAction(driver)
    presence_time = start_time        
    current_time = time.time()

    presence_time = current_time - start_time
    print(f"Presence time: {presence_time} seconds")
    metrics["Iteration"] = "#3"
    metrics["Group"] = "Test"
    metrics["Name"] = "user61"
    metrics["Presense Time (Seconds)"] = presence_time
    
    writeToCSV("metrics.csv", metrics)

    with open('metrics.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            react_coll.insert_one(row)

    driver.quit()
    
    #col = db["Iterations"]
    #x = col.find()
    #for data in x:
    #    print(data)

if __name__ == "__main__":
    main()