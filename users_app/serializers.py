from rest_framework.serializers import ModelSerializer

from users_app.models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
