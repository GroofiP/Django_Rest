import React from 'react'
import {Link} from "react-router-dom";


const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.linkRepository}</td>
            <td>{project.users}</td>
            <td>
                <button onClick={() => deleteProject(project.id)} type='button'>Delete</button>
            </td>

        </tr>
    )
}


const ProjectList = ({projects, deleteProject, divStyle}) => {

    return (
        <div>
            <table>
                <th>ID</th>
                <th>NAME</th>
                <th>LINK_REPOSITORY</th>
                <th>USERS</th>
                <th>

                </th>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
            </table>
            <div style={divStyle}>
                <Link to='/project/create'>Create</Link>
            </div>
            <div style={divStyle}>
                <Link to='/project/search'>Search</Link>
            </div>
        </div>

    )
}


export default ProjectList
