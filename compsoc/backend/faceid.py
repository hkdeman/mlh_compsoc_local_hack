import requests # pip3 install requests
from PIL import Image

region = "uksouth" #For example, "westus"
api_key = "52d99e786c16489aa2c8938df4e3a77a"

def request_image(data):
    # Set request headers
    headers = dict()
    headers['Ocp-Apim-Subscription-Key'] = api_key
    headers['Content-Type'] = 'application/octet-stream'

    # Read file
    # with open(path_to_file+file_name, 'rb') as f:
    #     data = f.read()
    
    # Make request and process response
    response = requests.post("https://uksouth.api.cognitive.microsoft.com/face/v1.0/detect", data=data, headers=headers)

    if response.status_code == 200 or response.status_code == 201:
        if 'content-length' in response.headers and int(response.headers['content-length']) == 0:
            result = None
        elif 'content-type' in response.headers and isinstance(response.headers['content-type'], str):
            if 'application/json' in response.headers['content-type'].lower():
                result = response.json() if response.content else None
            elif 'image' in response.headers['content-type'].lower():
                result = response.content

            try: 
                faceId = result[0]["faceId"]
            except:
                faceId = None
            return faceId
    else:
        print("Error code: %d" % response.status_code)
        print("Message: %s" % response.json())


# Set request headers
# headers = dict()
# headers['Ocp-Apim-Subscription-Key'] = api_key
# headers['Content-Type'] = 'application/json '

# # create facelist
# data = {
#         "name": "members",
#         "userData": "Face IDs of the members of the Comp Soc"
#     }
# response = requests.request('put', "https://uksouth.api.cognitive.microsoft.com/face/v1.0/facelists/1", json = data, headers=headers)

# print("Creating Facelists...")
# if response.status_code == 200 or response.status_code == 201:
#     if 'content-length' in response.headers and int(response.headers['content-length']) == 0:
#         result = None
#     elif 'content-type' in response.headers and isinstance(response.headers['content-type'], str):
#         if 'application/json' in response.headers['content-type'].lower():
#             result = response.json() if response.content else None
#         elif 'image' in response.headers['content-type'].lower():
#             result = response.content
#         print(result)
#         request_image()
# else:
#     print("Error code: %d" % response.status_code)
#     print("Message: %s" % response.json())


# Set request querystring parameters
# params = {'visualFeatures': 'Color,Categories,Tags,Description,ImageType,Faces,Adult'}



# id1 = request_image("meghan-markle.jpg")
# id2 = request_image("me.jpg")

# print(id1)
# print(id2)

# headers = dict()
# headers['Ocp-Apim-Subscription-Key'] = api_key
# headers['Content-Type'] = 'application/json'


# # id1 = "796c05a5-e168-417b-8863-5bf9bb48dbf4"
# # id2 = "7f134cec-e1f7-4293-8a2d-2cb2713350b2"
# # Read file

# # Make request and process response
def is_the_face_same(id1,id2):
    headers = dict()
    headers['Ocp-Apim-Subscription-Key'] = api_key
    headers['Content-Type'] = 'application/json'

    response = requests.post("https://uksouth.api.cognitive.microsoft.com/face/v1.0/verify", json={ "faceId1": id1, "faceId2": id2}, headers=headers)

    if response.status_code == 200 or response.status_code == 201:
        if 'content-length' in response.headers and int(response.headers['content-length']) == 0:
            result = None
        elif 'content-type' in response.headers and isinstance(response.headers['content-type'], str):
            if 'application/json' in response.headers['content-type'].lower():
                result = response.json() if response.content else None
            elif 'image' in response.headers['content-type'].lower():
                result = response.content
            # return result["persistedFaceId"]
            return result
    else:
        print("Error code: %d" % response.status_code)
        print("Message: %s" % response.json())