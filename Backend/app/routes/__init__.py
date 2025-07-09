from .projects import projects_bp
from .skills import skills_bp
from .contact import contact_bp

def register_routes(app):
    app.register_blueprint(projects_bp, url_prefix='/api/projects')
    app.register_blueprint(skills_bp, url_prefix='/api/skills')
    app.register_blueprint(contact_bp, url_prefix='/api/contact')
