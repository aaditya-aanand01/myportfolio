import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme}) => theme.card};

    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0, 0.6);
        filter: brightness(1.2);
    }
`;

const Image = styled.img`
    width: 100%;
    // height: 300px;
    height: 40%;
    background-color: ${({ theme}) => theme.white};
    border-radius: 10px;
    // object-fit: cover;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme}) => theme.primary };
    background-color: ${({theme}) => theme.primary +15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
    font-size: 12px;
    font-weigth:400;
    margin-left: 2px;
    color: ${({theme}) => theme.text_secondary + 80};

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 99};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%;
`;


const Members = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
`;

const MemberContainer = styled.div`
    margin-left: 1rem;
`;

const CodeButton = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme}) => theme.white};
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 2px solid ${({ theme }) => theme.card};
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.primary});

    
`;


const ProjectCard = ({project}) => {
  return (
    <Card>
        <Image src={project.image} />
        <Tags>
            {project.tags.map((tag) =>(
                <Tag key={tag}>{tag}</Tag>
            ))}
        </Tags>
        <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
        </Details>
        <Members>
            <MemberContainer>
            {project.member?.map((member) => (
                <Avatar src={member.img}/>
                ))}
            </MemberContainer>
            <MemberContainer>
                <CodeButton href={project.github} target="display" alt="Source Code"><GitHubIcon sx={{ fontSize: 30 }}/></CodeButton>
                <CodeButton href={project.webapp} target="display"><LaunchIcon sx={{ fontSize: 30 }}/></CodeButton>
            </MemberContainer>
        </Members>
    </Card>
  )
}

export default ProjectCard
