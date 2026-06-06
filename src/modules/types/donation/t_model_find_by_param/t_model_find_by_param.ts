type t_model_param={
    [key:string]:string|number
}
export type t_model_find_by_param={
    param:t_model_param,
    logic?:'or'|'and'
}