# codelearner contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT
> Firstly get an issue assigned, whether it is already opened or raised by you , and create a pull request.
> Pull Request having no issue associated with them will not accept.

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them

- Node.js is installed mandatory.

## How to Contribute

- Look at the existing [**Issues**](https://github.com/techysiddhant/code-learner/issues) or [**create a new issue**](https://github.com/techysiddhant/code-learner/issues/new)!
- [**Fork the Repo**](https://github.com/techysiddhant/code-learner/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/techysiddhant/code-learner/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

## Appending new Courses or add existing Tutorials 🔗

> You can also create [issue(s)](https://github.com/techysiddhant/code-learner/issues/new) for adding your course or tutorial and someone else will take care of them.

## Follow these steps to get your Category is added to the code learner

- A newly created category added inside the data/categories folder.

- Each category has it's own folder
- First create the categoryname.js file inside the folder .
- then create required course file inside the folder.
  > For Example: You want to add new category of Ios Development.
  >
  > 1. create a folder name <iosdevelopment> inside the data/categories folder
  > 2. then inside the iosdevelopment folder create file <iosdevelopment.js> and add create a array inside it by the name iosdevelopment
  > 3. Like This ⬇️

```
export const iosdevelopment = [{
        id: 1,
        title: "Swift",
        url: "swift",
        isNew: true
    },]
```

> 4. Now if you want to add the creator for swift then create a file <swift.js> file inside same folder.

```
export const css = [{
    id: ,
    createrName: "",
    desc: "",
    title: "",
    profileUrl: "",
    language: "",
    courseId: ,
}]
```

> 5. Refer the creator id from the creatorIdList
> 6. description is taken from creator youtube channel and title represent the course profile Url copy from the youtube profile picture courseId is added after creation of the Tutorial of the course.
> 7. courseId have format to create for example:

```
id of the category is 1 = 1,
id of the creator tutorial is 1 = 01,
id of the creator is 1 = 01,
courseId = 10101
```

> 8. Then Write logic for the new category added by you inside redux.

---

## Follow these steps to get your Course is added to the code learner

> 1. First you need to check if the tutorial file is already exist or not if it is exist then add inside it or create another one.
> 2. Let Understand with the example: You want to add the javascript tutorial from xyz youtuber.
> 3. 1. Check the Creator is present inside the categories/<categoryname folder>/<tutorialname file>
> 4. If its is present then, move to he point 6.
> 5. It is not present then added first, Like:

```
    id: ,
    createrName: "",
    desc: "",
    profileUrl: "",
    language: "",
    courseId: ,
```

**NOTE**
Add the name,descriprtion from the youtube channel , profile url form the youtube profile picture url and language is important course ID is added after the creation of the tutorial

> 6. Now Creator is present, Now inside the tutorials/categorynamefolder/nameofcourse file. add the course of the creator like this:
> 7. Before adding the course create a courseId like this

```
id of the category is 1 = 1,
id of the creator tutorial is 1 = 01,
id of the creator is 1 = 01,
courseId = 10101
```

```
courseId: 10101,
    createrName: "",
    courseName: "",
    lectures: []
```

> 8. Here lectures is array. add lecture inside it like:

```
lectureId: 0,
                lectureName: "",
                lectureUrl: "https://www.youtube.com/embed/6mbwJ2xhgzM?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
                lectureDescription: "",
```

> 9. Paste only embeded url of the youtube video . copy the embed code form the youtube video paste into any editor and copy the url form it.

> 10. now check and done.

---

## Making Pull Requests

1. When you submit a pull request, several tests are automatically run
   as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. If your pull request has merge conflicts with the `main` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `main` branch into your branch (`git pull upstream main`), and then pushing the updated branch to your fork (`git push`).

3. Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review. In such cases, the reviewer has the right to close your pull request and ask that you submit a separate pull request for each logical set of changes that belong together.

4. Link the issue you have resolved in the Pull Request Template (e.g Closes/Fixes #99).
5. Use [Conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) for your changes.
6. Do not re-open a pull request that a reviewer has closed.
   - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.

---

## Remarks ✅

If something is missing here, or you feel something is not well described, either directly create a PR or [create an issue](https://github.com/techysiddhant/code-learner/issues).
