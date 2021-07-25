import django_filters

from todo.models import Todo


class TodoFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='iexact')

    class Meta:
        model = Todo
        fields = ['created', 'updated']
