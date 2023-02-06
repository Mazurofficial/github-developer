export type LocalGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string | null,
    blog: string,
    location: string,
    email: string | null,
    hireable: string | null,
    bio: string,
    repos: number,
    followers: number,
    following: number,
    created: string
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string | null,
    blog: string,
    location: string,
    email: string | null,
    hireable: string | null,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string
}

export type GithubError = {
    message: string,
    documentation_url: string
}
