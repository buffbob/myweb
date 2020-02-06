from flask import Blueprint, render_template


errors = Blueprint("errors", __name__)

@errors.app_errorhandler(404)
def err_404(error):
    return render_template("errors/404.html"), 404


@errors.app_errorhandler(405)
def err_405(error):
    return render_template("errors/405.html"), 405

@errors.app_errorhandler(500)
def err_500(error):
    return render_template("errors/500.html"), 500


