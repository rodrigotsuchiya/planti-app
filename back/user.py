import os
import urllib.parse as up
import psycopg2

up.uses_netloc.append("postgres")
url = up.urlparse(os.environ["postgres://apddqolc:wia-4sUSjnBHRKKDQvKs0uNSE55ua_7H@hanno.db.elephantsql.com:5432/apddqolc"])
    conn = psycopg2.connect(database=url.path[1:],
    user=url.username,
    password=url.password,
    host=url.hostname,
    port=url.port
)

class CreaterUser(object):
    """docstring for CreaterUser."""

    def __init__(self, arg):
        super(CreaterUser, self).__init__()
        self.arg = arg

class ReadUser(object):
    """docstring forReadUser."""

    def __init__(self, arg):
        superReadUser, self).__init__()
        self.arg = arg


class UpadateUser(object):
    """docstring for UpadateUser."""

    def __init__(self, arg):
        super(UpadateUser, self).__init__()
        self.arg = arg

class DeleteUser(object):
    """docstring forDeleteUser."""

    def __init__(self, arg):
        superDeleteUser, self).__init__()
        self.arg = argimport os
import urllib.parse as up
import psycopg2

up.uses_netloc.append("postgres")
url = up.urlparse(os.environ["postgres://apddqolc:wia-4sUSjnBHRKKDQvKs0uNSE55ua_7H@hanno.db.elephantsql.com:5432/apddqolc"])
    conn = psycopg2.connect(database=url.path[1:],
    user=url.username,
    password=url.password,
    host=url.hostname,
    port=url.port
)

class CreaterUser(object):
    """docstring for CreaterUser."""

    def __init__(self, arg):
        super(CreaterUser, self).__init__()
        self.arg = arg

class ReadUser(object):
    """docstring forReadUser."""

    def __init__(self, arg):
        superReadUser, self).__init__()
        self.arg = arg


class UpadateUser(object):
    """docstring for UpadateUser."""

    def __init__(self, arg):
        super(UpadateUser, self).__init__()
        self.arg = arg

class DeleteUser(object):
    """docstring forDeleteUser."""

    def __init__(self, arg):
        superDeleteUser, self).__init__()
        self.arg = argimport os
import urllib.parse as up
import psycopg2

up.uses_netloc.append("postgres")
url = up.urlparse(os.environ["postgres://apddqolc:wia-4sUSjnBHRKKDQvKs0uNSE55ua_7H@hanno.db.elephantsql.com:5432/apddqolc"])
    conn = psycopg2.connect(database=url.path[1:],
    user=url.username,
    password=url.password,
    host=url.hostname,
    port=url.port
)

class CreaterUser(object):
    """docstring for CreaterUser."""

    def __init__(self, arg):
        super(CreaterUser, self).__init__()
        self.arg = arg

class ReadUser(object):
    """docstring forReadUser."""

    def __init__(self, arg):
        superReadUser, self).__init__()
        self.arg = arg


class UpadateUser(object):
    """docstring for UpadateUser."""

    def __init__(self, arg):
        super(UpadateUser, self).__init__()
        self.arg = arg

class DeleteUser(object):
    """docstring forDeleteUser."""

    def __init__(self, arg):
        superDeleteUser, self).__init__()
        self.arg = arg
