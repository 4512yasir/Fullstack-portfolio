from flask import Blueprint, jsonify
from ..models import Skill

skills_bp = Blueprint('skills', __name__)

@skills_bp.route('/', methods=['GET'])
def get_skills():
    skills = Skill.query.all()
    result = []
    for skill in skills:
        result.append({
            "id": skill.id,
            "name": skill.name,
            "category": skill.category
        })
    return jsonify(result)
