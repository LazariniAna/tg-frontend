export interface PollForm {
    active?: number,
    created_at?: string,
    updated_at?: string,
    id?: number,
    diagnostic_assessment_type_id?: number,
    month?: string,
    monthFormatted?: string,
    class_id?: number,
    teacher_id?: number,
    students?: Students,
    diagnostic_assessment_students
?: Students,
    classe?: ClassData,
    class?: ClassData,
    hypothesis_id?: number,
    isPrevious?: boolean,
}

export interface SavePoll{
    diagnostic_assessment_type_id: number,
    class_id: number,
    month: string,
    students: Students,
    id?:number 
}
  
export interface ClassData {
    active?: number,
    cod_inep?: number,
    created_at?: string,
    id?: number,
    name?: string,
    students?: Students,
    teacher_id?: number,
    updated_at?: string,
    year?: number | string,
    yearLabel?: string,
    school?: SchoolSaved,
    values?: ClassForm,
    value?: any,
    label?: string,
}

export interface Teacher {
    active?: number,
    auth_id?: string,
    auth_type?: string,
    classes?: ClassData[],
    name?: string,
    confirmed?: number,
    id?: number,
    updated_at?: string,
    created_at?: string,
}
export interface SchoolSaved {
    category?: string,
    cod_ibge?: number,
    cod_inep?: number,
    municipio?: string,
    location?: string,
    municipality?: Munucipality,
    name?: string,
    uf?: string,
}

export interface Munucipality {
    cod_ibge?: number,
    cod_uf?: number,
    municipio?: string,
    uf?: string,
}
export interface ClassForm {
    state?: object,
    school?: object,
    municipality?: object,
    year?: object,
    class?: string
}

export interface LocalState {
    state?: State,
    municipality?: Municipality,
    schools?: Schools
    
}

export interface LocationState {
    states?: State,
    cities?: Municipality,
    schools?: Schools
    
}
export interface ClassState {
    cod_inep?: number,
    year?: number,
    name?: string,
    students?: Students,
    values?: ClassForm,
    active?: number,
    created_at?: string,
    id?: number,
    teacher_id?: number,
    updated_at?: string,
    yearLabel?: string,
    school?: SchoolSaved,
}
export interface ClassesState {
    classes?: Classes,
}
export interface Polls {
    polls?: PollForm[],
}
export type Students = Student[];
export type Schools = School[];
export type Cities = Municipality[];
export type States = State[];
export type Classes = ClassData[];

export interface StudentSave {
    student_id?: number,
    comment: string,
    hypothesis_id?: number,

}

export interface Student {
    id?: number,
    name: string,
    diagnostic_assessment_id?: number,
    hypothesis_id?: number,
    student_id?: number,
    active?: number,
    newStudent?: boolean,
    hypothese_id?: number,
    comment?: string,
    comment_?: boolean,
    color?: string,
    hypothese?: any,
    student?:StudentBasic
}

export interface StudentBasic {
    id: number,
    name: string,
}
export interface ObjValue {
    value: string,
    label: string,
}

export interface StatusState {
    status: number;
    name: string
}
export interface MenuState {
    open: boolean;
    itensMenu: MenuItems,
    visible: boolean,
}
export type MenuItems = MenuItem[];

export interface MenuItem {
    title: string;
    icon?: string;
    childrens?: MenuItems;
    url?: string | undefined;
    isDisabled?:boolean;
}

export interface State {
    cod_uf: number;
    uf: string;
    value?: State,
    label?: string

}
export interface Municipality {
    cod_ibge: number;
    cod_uf?: number;
    municipio?: string;
    uf?: string;
    value?: Municipality,
    label?: string
}
export interface School {
    cod_inep: number;
    cod_ibge?: number;
    name: string;
    uf?: string;
    municipio?: string;
    location?: string;
    category?: string;
    value?: School,
    label?: string
}

export interface Hypothese {
    value: number;
    label: string;
    color: string;
}

export interface DataObject {
    id: number;
    name: string;
    class_id: number;
    active: number;
    created_at: string;
    updated_at: string | null;
    hypothese: Hypothese;
    comment?: string;
}
export interface GroupedData {
    hipotese: string;
    sigla?: string;
    acronym: string;
    quantidade_alunos: number;
}

export interface HypotheseBack {
    id?: number;
    diagnostic_assessment_type_id?: number;
    value?: number;
    ordering?: number;
    name?: string;
    label?: string;
    acronym?: string;
    description?: string;
    background_color?: string;
}

export interface OptionsRadio {
    name: string;
    value:string,
    id:number,
    label:string;
    question_id:string;
    option_id:string;
  }

  export type Contents = ContentItems[];

  export interface ContentItems{
    id:number,
    text: string,
    title:string,
    subtitle:string,
    image:string,
  }

  export interface PlansItems{
    id:number,
    type: string,
    title: string,
    grade: string,
    link: string,
    cod: string,
    image: string,
  }
  export interface ToolsItems{
    id:number,
    title: string,
    info: string,
    image: string,
    link?: string,
    redirect?: string,
    redirectName?: string,
    linkImage?: string,
  }

  export interface MaterialsItems{
    id:number,
    type: string,
    title: string,
    grade: string,
    link: string,
    document: string,
    sub_title: string,
  }