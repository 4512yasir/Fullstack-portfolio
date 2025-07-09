from app import create_app, db
from app.models import Project, Skill

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    # Sample Projects
    project1 = Project(
        title="Chama Management System",
        description="A fullstack web app to manage group savings, loans, and meetings.",
        tech_stack=["Flask", "React", "SQLite"],
        github_link="https://github.com/yaska/chama-system",
        demo_link="",  # empty to trigger fallback
        thumbnail_url="https://via.placeholder.com/300x180"
    )

    project2 = Project(
        title="Portfolio Website",
        description="My personal portfolio showcasing skills and projects using React and Flask.",
        tech_stack=["React", "Flask", "SQLAlchemy"],
        github_link="https://github.com/yaska/portfolio",
        demo_link="",
        thumbnail_url="https://via.placeholder.com/300x180"
    )

    # Sample Skills
    skill1 = Skill(name="React", category="Frontend")
    skill2 = Skill(name="Flask", category="Backend")
    skill3 = Skill(name="SQLAlchemy", category="Database")
    skill4 = Skill(name="Problem Solving", category="Soft Skill")
    skill5 = Skill(name="Communication", category="Soft Skill")

    # Add and commit to DB
    db.session.add_all([project1, project2, skill1, skill2, skill3, skill4, skill5])
    db.session.commit()

    print("✅ Database initialized and seeded.")
