export interface ResumeQuery {
  contentfulFiles: {
    resume: FileNode;
  };
}

export interface FileNode {
  file: {
    url: string;
  };
}

export interface File {
    url: string;
}