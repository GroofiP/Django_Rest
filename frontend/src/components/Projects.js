import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.linkRepository}</td>
            <td>{project.users}</td>
        </tr>
    )
}


const ProjectList = ({projects}) => {
    return (
        <table>
            <th>ID</th>
            <th>NAME</th>
            <th>LINK_REPOSITORY</th>
            <th>USERS</th>
            {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}


export default ProjectList
