from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase

from users_app.models import User
from users_app.views import UserModelViewSet


class TestUserViewSet(TestCase):

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users/', {'first_name': 'Александр', 'last_name': "Пушкин", "username": "PushAlex",
                                               "email": "pushala@mail.ru"})
        view = UserModelViewSet.as_view({'post': 'update'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail(self):
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        client = APIClient()
        response = client.get(f'/api/users/{admin.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self):
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        client = APIClient()
        response = client.put(f'/api/users/{admin.id}/',
                              {'first_name': 'Александр', 'last_name': "Пушкин", "username": "PushAlex",
                               "email": "pushala@mail.ru"})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_edit_admin(self):
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        client = APIClient()
        user = User.objects.create(first_name="Александр", last_name="Пушкин", username="PushAlex",
                                   email="pushala@mail.ru")
        client.login(username='admin', password='admin123456')
        response = client.put(f'/api/users/{user.id}/',
                              {'first_name': 'Грин', 'last_name': "Пушкин", "username": "PushAlex",
                               "email": "pushala@mail.ru"}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user = User.objects.get(id=user.id)
        self.assertEqual(user.first_name, 'Грин')
        self.assertEqual(user.last_name, "Пушкин")
        client.logout()


class TestUsersViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
