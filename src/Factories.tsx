import type { InfoObject } from "./Interfaces";

export const Factories = {
  basic: function (
    name = "",
    title = "",
    phone = "",
    email = "",
    location = "",
    linkedin = "",
    github = "",
    portfolio = ""
  ): InfoObject {
    return {
      f1: { type: "header", label: "Basic info:" },
      name: { id: "name", label: "Name", value: name },
      title: { id: "title", label: "Title", value: title },
      phone: { id: "phone", label: "Phone Number", value: phone },
      email: { id: "email", label: "Email", type: "email", value: email },
      location: { id: "location", label: "Location", value: location },
      f2: { type: "header", label: "Your socials:" },
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
      date: { id: "date", label: "Achievement date", value: date },
      description: { id: "description", label: "Description", value: desc },
    };
  },

  skill: function (values = [""]): InfoObject {
    return {
      skills: { id: "skills", label: "Skills", values: values, value: "" },
    };
  },
};
