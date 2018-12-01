from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from backend.faceid import request_image, is_the_face_same
from backend.models import Member

# Create your views here.

@csrf_exempt
def check_user(request):
    if request.method == "POST":
        if(len(request.FILES)==0):
            print(request.FILES)
            return JsonResponse({"status": "whoops!"})
        data = request.FILES["image"].read()
        face_id = request_image(data)
        if (face_id is None):
            return JsonResponse({"code": 404, "status": "No face found"})
        members = Member.objects.all()
        logged_in_member = None
        for member in members:
            image = member.image.read()
            image_id = request_image(image)
            result = is_the_face_same(face_id, image_id)
            if(result["isIdentical"]):
                logged_in_member = member.name
                break
        if (logged_in_member is not None):
            return JsonResponse({"code": 200, "name": logged_in_member, "status": "Member found"})
        else:
            return JsonResponse({"code": 404, "status": "No member found"})            
    else:
        return JsonResponse({"status": "Please use a POST request"})
