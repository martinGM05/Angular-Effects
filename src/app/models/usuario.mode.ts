export interface Main {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuario[];
    support:     Support;
}

export interface Usuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

export interface MainUser {
    data:    Usuario;
    support: Support;
}

export interface UsuarioData {
    id:            number;
    name:          string;
    year:          number;
    color:         string;
    pantone_value: string;
}