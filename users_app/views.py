from rest_framework import mixins, viewsets

from .models import User
from .serializers import UserModelSerializer, UserModelSerializerNewVersion


class UserModelViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin,
                       viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UserModelSerializerNewVersion
        return UserModelSerializer
