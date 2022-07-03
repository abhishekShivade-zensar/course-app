var express = require('express');
// const res = require('express/lib/response');

var router = express.Router();

const courses = [
    {
        id: 1,
        title: "Securing React Apps with Auth0",
        slug: "react-auth0-authentication-security",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 2,
        title: "React: The Big Picture",
        slug: "react-big-picture",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 3,
        title: "Creating Reusable React Components",
        slug: "react-creating-reusable-components",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 4,
        title: "Building a JavaScript Development Environment",
        slug: "javascript-development-environment",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 5,
        title: "Building Applications with React and Redux",
        slug: "react-redux-react-router-es6",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 6,
        title: "Building Applications in React and Flux",
        slug: "react-flux-building-applications",
        authorId: 1,
        category: "JavaScript"
    },
    {
        id: 7,
        title: "Clean Code: Writing Code for Humans",
        slug: "writing-clean-code-humans",
        authorId: 1,
        category: "Software Practices"
    },
    {
        id: 8,
        title: "Architecting Applications for the Real World",
        slug: "architecting-applications-dotnet",
        authorId: 1,
        category: "Software Architecture"
    },
    {
        id: 9,
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        slug: "career-reboot-for-developer-mind",
        authorId: 1,
        category: "Career"
    },
    {
        id: 10,
        title: "Web Component Fundamentals",
        slug: "web-components-shadow-dom",
        authorId: 1,
        category: "HTML5"
    }
];

const authors = [
    { id: 1, name: "Cory House" },
    { id: 2, name: "Scott Allen" },
    { id: 3, name: "Dan Wahlin" }
];

// const newCourse = {
//     id: null,
//     title: "",
//     authorId: null,
//     category: ""
// };

// console.log(courses);

router.get('/', function (_req, res) {
    res.json(courses);
});

router.get('/:id', function (req, res) {
    var course1 = courses.filter(function (course) {
        if (course.id == req.params.id) {
            return true;
        }
    });

    if (course1.length == 1) {
        res.json(course1[0]);
    } else {
        res.status(404);
        res.send("course not found");
    }
});

router.get('/:id', function (req, res) {
    var course1 = courses.filter(function (course) {
        if (course.category == req.params.id) {
            return true;
        }
    });

    if (course1.length == 1) {
        res.json(course1[0]);
    } else {
        res.status(404);
        res.send("course not found");
    }
});

router.post('/', function (req, res) {
    if (!req.body.title || !req.body.authorId || !req.body.category) {
        res.status(400);
        res.json({ message: "Bad request" });

    } else {
        console.log(req.body.title);

        var newCourse = courses[courses.length - 1].id + 1;
        courses.push({
            id: null,
            title: req.body.title,
            authorId: null,
            category: req.body.category
        });
        res.json(courses);
    }
});

router.put('/:id', function (req, res) {
    if (!req.body.title || !req.body.authorId || !req.body.category || !req.params.id) {
        res.status(400);
        res.json({ message: "Bad request" });

    } else {

        var newIndex = courses.map(function (course) {
            return course.id;
        }).indexOf(parseInt(req.params.id));

        if (newIndex === -1) {
            courses.push({
                id: null,
                title: req.body.title,
                authorId: null,
                category: req.body.category
            });
            res.json(courses);
        } else {
            courses[newIndex] = {
                id: req.params.id,
                title: req.body.title,
                authorId: null,
                category: req.body.category
            };
            res.json(courses);
        }
    }
});


router.delete('/:id', function (req, res) {
    if (!req.body.title || !req.body.authorId || !req.body.category || !req.params.id) {
        res.status(400);
        res.json({ message: "Bad request" });

    } else {
        var newIndex = courses.map(function (course) {
            return course.id;
        }).indexOf(parseInt(req.params.id));

        if (newIndex === -1) {
            console.log("item Not found");
            res.json(courses);
        } else {
            courses.splice(newIndex, 1);
            res.json(courses);
        }
    }
});

module.exports = router;
