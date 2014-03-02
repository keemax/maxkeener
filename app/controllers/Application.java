package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("my name is Max"));
    }

    public static Result alyssa() {
        return ok(alyssa.render());
    }

}
