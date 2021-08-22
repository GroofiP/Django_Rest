from rest_framework.serializers import ModelSerializer

from users_app.models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username", "email"]


class UserModelSerializerNewVersion(ModelSerializer):
    class Meta:
        model = User
        fields = ["is_staff", "is_superuser"]
