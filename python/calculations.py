import sys
import time
import os.path
import json


def add():
   firstNumber = sys.argv[2]
   secondNumber = sys.argv[3]
#    return str(float(firstNumber) + float(secondNumber))
   return str("Well the update was successfull")

   
def substraction():
    firstNumber = sys.argv[2]
    secondNumber = sys.argv[3]
    return str(float(firstNumber) - float(secondNumber))

def multiply():
    firstNumber = sys.argv[2]
    secondNumber = sys.argv[3]
    return str(float(firstNumber) * float(secondNumber))

def divide():
    firstNumber = sys.argv[2]
    secondNumber = sys.argv[3]
    return str(float(firstNumber) / float(secondNumber))

def timerRes():
    mins = 0
    jsonFile = open(os.path.dirname(os.path.realpath(__file__)) + "/data.json", "r") # Open the JSON file for reading
    data = json.load(jsonFile) # Read the JSON into the buffer
    jsonFile.close() # Close the JSON file
    ## Working with buffered content
    data["process"] = 'running'
    ## Save our changes to JSON file
    jsonFile = open(os.path.dirname(os.path.realpath(__file__)) +"/data.json", "w+")
    jsonFile.write(json.dumps(data))
    jsonFile.close()
    while mins != 10:
        # Sleep for a minute
        time.sleep(3)
        # Increment the minute total
        mins += 1
        print(mins)
        sys.stdout.flush()
    jsonFile = open(os.path.dirname(os.path.realpath(__file__)) +"/data.json", "r") # Open the JSON file for reading
    data = json.load(jsonFile) # Read the JSON into the buffer
    jsonFile.close() # Close the JSON file
    ## Working with buffered content
    data["process"] = 'not-running'
    ## Save our changes to JSON file
    jsonFile = open(os.path.dirname(os.path.realpath(__file__)) +"/data.json", "w+")
    jsonFile.write(json.dumps(data))
    jsonFile.close()
    # print os.path.dirname(os.path.realpath(__file__))
    # sys.stdout.flush()
    


functionName= sys.argv[1]
if functionName == 'add':
    result = add()
    print result
    sys.stdout.flush()
if functionName == 'substract':
    result = substraction()
    print result
    sys.stdout.flush()
if functionName == 'multiply':
    result = multiply()
    print result
    sys.stdout.flush()
if functionName == 'divide':
    result = divide()
    print result
    sys.stdout.flush()
if functionName == 'timerRes':
    timerRes()

    


