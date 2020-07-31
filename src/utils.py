from flask import jsonify


def to_json(query):
    return jsonify([dict(zip(tuple(query.keys()), i)) for i in query.cursor])
