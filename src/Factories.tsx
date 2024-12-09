import type { InfoObject } from "./Interfaces";

export const Factories = {
  basic: function (name = "", title = "", summary = ""): InfoObject {
    return {
      name: { id: "name", label: "Name", value: name },
      title: { id: "title", label: "Title", value: title },
      summary: {
        id: "summary",
        label: "Summary",
        value: summary,
        type: "textarea",
        classes: "textarea",
      },
    };
  },

  contact: function (
    phone = "",
    email = "",
    location = "",
    linkedin = "",
    github = "",
    portfolio = "",
    linkedinDisplay = "",
    githubDisplay = "",
    portfolioDisplay = ""
  ): InfoObject {
    return {
      phone: { id: "phone", label: "Phone", type: "phone", value: phone },
      email: { id: "email", label: "Email", type: "email", value: email },
      location: { id: "location", label: "Location", value: location },
      linkedin: {
        id: "linkedin",
        label: "Linkedin",
        type: "url",
        value: linkedin,
      },
      github: { id: "github", label: "Github", type: "url", value: github },
      portfolio: {
        id: "portfolio",
        label: "Portfolio",
        type: "url",
        value: portfolio,
      },
      linkedinDisplay: {
        id: "linkedinDisplay",
        label: "Linkedin Link Text",
        type: "text",
        value: linkedinDisplay,
      },
      githubDisplay: {
        id: "githubDisplay",
        label: "Github Link Text",
        type: "text",
        value: githubDisplay,
      },
      portfolioDisplay: {
        id: "portfolioDisplay",
        label: "Portfolio Link Text",
        type: "text",
        value: portfolioDisplay,
      },
    };
  },

  edu: function (school = "", degree = "", start = "", end = ""): InfoObject {
    return {
      school: { id: "school", label: "School", value: school },
      degree: { id: "degree", label: "Degree", value: degree },
      start: { id: "start", label: "Start date", value: start },
      end: { id: "end", label: "End date", value: end },
    };
  },

  work: function (
    company = "",
    title = "",
    start = "",
    end = "",
    value = "",
    values: string[] = []
  ): InfoObject {
    return {
      company: { id: "company", label: "Company", value: company },
      title: { id: "title", label: "Title", value: title },
      start: { id: "start", label: "Start date", value: start },
      end: { id: "end", label: "End date", value: end },
      about: {
        id: "about",
        label: "About",
        type: "long",
        classes: "repeating",
        value: value,
        values: values,
      },
    };
  },

  achieve: function (title = "", date = "", desc = ""): InfoObject {
    return {
      title: { id: "title", label: "Title", value: title },
      date: { id: "date", label: "Date", value: date },
      description: { id: "description", label: "Description", value: desc },
    };
  },

  skill: function (values = [""]): InfoObject {
    return {
      skills: { id: "skills", label: "Skills", values: values, value: "" },
    };
  },
};
