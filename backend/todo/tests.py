from django.test import TestCase
from mixer.backend.django import mixer
from rest_framework import status
from todo.models import Todo, Project
from todo.views import TodoModelViewSet
from rest_framework.test import APIRequestFactory, APITestCase, APIClient

from users_app.models import User


class TestTodoViewSet(TestCase):

    def test_create_todo(self):
        factory = APIRequestFactory()
        request = factory.post('/api/todo/',
                               {"headNote": "Hello12312213", "textNote": "Good luck!3123", "isActive": True,
                                "project": 1, "user": 4})
        view = TodoModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail_project(self):
        todo = mixer.blend(Todo)
        client = APIClient()
        response = client.get(f'/api/project/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestTodosViewSet(APITestCase):

    def test_get_list_todo(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectViewSet(TestCase):

    def test_create_project(self):
        factory = APIRequestFactory()
        request = factory.post('/api/project/',
                               {"headNote": "Hello12312213", "textNote": "Good luck!3123", "isActive": True,
                                "project": 1, "user": 4})
        view = TodoModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail_project(self):
        project = mixer.blend(Project)
        client = APIClient()
        response = client.get(f'/api/project/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectsViewSet(APITestCase):

    def test_get_list_project(self):
        response = self.client.get('/api/project/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
