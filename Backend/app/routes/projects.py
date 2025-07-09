from flask import Blueprint, jsonify, request
from ..models import Project
from .. import db

projects_bp = Blueprint('projects', __name__)

@projects_bp.route('/', methods=['GET'])
def get_projects():
    sort = request.args.get('sort', 'latest')

    if sort == 'latest':
        projects = Project.query.order_by(Project.created_at.desc()).all()
    else:
        projects = Project.query.all()

    result = []
    for project in projects:
        result.append({
            "id": project.id,
            "title": project.title,
            "description": project.description,
            "tech_stack": project.tech_stack, 
            "github_link": project.github_link,
            "demo_link": project.demo_link if project.demo_link else "Coming Soon",
            "thumbnail_url": project.thumbnail_url,
            "created_at": project.created_at.strftime('%Y-%m-%d'),
            "updated_at": project.updated_at.strftime('%Y-%m-%d')
        })
    return jsonify(result)
