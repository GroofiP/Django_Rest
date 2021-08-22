import graphene
from graphene_django import DjangoObjectType

from todo.models import Project, Todo
from users_app.models import User


class UsersType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectsType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UsersType)
    all_todo = graphene.List(TodoType)
    all_projects = graphene.List(ProjectsType)

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_todo(root, info):
        return Todo.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()


schema = graphene.Schema(query=Query)
