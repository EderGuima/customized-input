//*==================================================================*
//*                            EDERGR.COM                            *
//*------------------------------------------------------------------*
//*    PROGRAM.......: customizedinput.tsx                           *
//*    DEVELOPER.....: EDER GUIMARAES RODRIGUES                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: BUILD AN INPUT FIELD WITH CUSTOMIZED PROPERTIES *
//*                  AND STYLES                                      *
//*------------------------------------------------------------------*
//*    IMPORTS.......:                                               *
import React from 'react';
import CSS from 'csstype';
//*==================================================================*
//*                                                                  *
export declare type TypesWorking = 'text' | 'color' | 'date' |
    'datetime-local' | 'email' | 'file' | 'hidden' | 'month' |
    'number' | 'password' | 'range' | 'time' | 'url' | 'week'

interface InputOptions {
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* OPTIONAL FUNCTIONS CALLBACK:                                 *
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* REQUIRED PROPERTIES FIELDS:                                  *
    //* ------------------------------------------------------------ *
    //* ID...........: ID TO LINK LABEL X INPUT                      *
    id: string;
    //*                                                              *
    //* TYPE.........: INPUT TYPE                                    *
    type: TypesWorking;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* OPTIONAL PROPERTIES FIELDS:                                  *
    //* ------------------------------------------------------------ *
    //* PLACEHOLDER..: LABEL PLACEHOLDER                             *
    placeholder?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* DEFAULTVALUE.: DEFAULT VALUE TO THE INPUT                    *
    defaultValue?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* DISABLED.....: TRUE DISABLE | FALSE ENABLE - FALSE DEFAULT   *
    disabled?: boolean;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* READONLY.....: TRUE READ ONLY | FALSE OPEN - FALSE DEFAULT   *
    readOnly?: boolean;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* MAXLENGTH....: MAX INPUT LENGTH                              *
    maxLength?: number;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* MINLENGTH....: MIN INPUT LENGTH                              *
    minLength?: number;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* REQUIRED.....: TRUE REQUIRED | FALSE OPTIONAL - FALSE DEFAULT*          
    required?: boolean;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUTHEIGHT..: INPUT HEIGHT                                  *           
    inputHeight?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUTWIDTH...: INPUT WIDTH                                   *           
    inputWidth?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUTGROUPMARGIN: INPUT GROUP MARGIN                         *         
    inputGroupMargin?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUTFONTSIZE: INPUT FONTSIZE                                *           
    inputFontSize?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUTBORDERRADIUS: INPUT BORDER RADIUS                       *   
    inputBorderRadius?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* PLACEHOLDERCOLOR: LABEL PLACEHOLDER COLOR                    *           
    placeholderColor?: string;
}

class customizedinput extends React.Component<InputOptions, {
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* CONTROLL.....:                                               *
    onFocus: boolean;
}> {
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* CONSTRUCTOR..:                                               *
    constructor(props: any) {
        super(props);
        this.state = {
            onFocus: false,
        };
        //*                                                          *
        //* -------------------------------------------------------  *
        //* BINDS....:                                               *
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT_GROUP CSS..:                                           *
    input_group: CSS.Properties = {
        position: "relative",
        margin: this.props.inputGroupMargin !== undefined
            ? this.props.inputGroupMargin : "10px 0",
    }
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* inputLabel CSS..:                                           *
    inputLabel: CSS.Properties = {
        position: "absolute",
        top: "16px",
        color: this.props.placeholderColor !== undefined
            ? this.props.placeholderColor : "#999",
        fontSize: "20px",
        marginLeft: "10px",
    };
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* FOCUSED CSS......:                                           *
    focused: CSS.Properties = {
        color: "#999",
        fontSize: "15px",
        transition: "transform 150ms, font-size 150ms",
        transform: "translateY(-100%)",
    }
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT CSS........:                                           *
    input: CSS.Properties = {
        height: this.props.inputHeight,
        width: this.props.inputWidth,
        fontSize: this.props.inputFontSize !== undefined
            ? this.props.inputFontSize : "20px",
        paddingLeft: this.props.type === "color" ||
            this.props.type === "range" ? "0px" : "9px",
        paddingTop: this.props.type === "color" ||
            this.props.type === "range" ? "0px" : "15px",
        border: 0,
        borderBottom: "1px solid",
        borderRadius: this.props.inputBorderRadius,
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* ONFOCUS FUNCTION                                             *
    onFocus() {
        this.setState({
            onFocus: true
        })
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* ONBLUR FUNCTION                                              *
    onBlur(e: any) {
        if (e.target.value === "" || e.target.value === undefined) {
            this.setState({
                onFocus: false
            })
        }
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* MAIN RENDER FUNCTION                                         *
    render() {
        //*----------------------------------------------------------*
        //* HTML RETURN                                              *
        //*----------------------------------------------------------*
        let borderBottom: CSS.Properties = this.state.onFocus
            ? {
                borderBottomColor: this.props.placeholderColor
                    !== undefined
                    ? this.props.placeholderColor
                    : "#999"
            }
            : {
                borderBottomColor: this.props.required === true
                    ? "#F00" : "#999"
            }
        return (
            <div style={this.input_group}>
                <label
                    htmlFor={this.props.id}
                    // style={label}>
                    style={this.state.onFocus
                        ? Object.assign({},
                            this.inputLabel, this.focused
                        )
                        : this.inputLabel}>
                    {this.props.placeholder}
                </label>
                <input
                    style={Object.assign({},
                        this.input,
                        borderBottom
                    )}
                    id={this.props.id}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onClick={this.props.onClick}
                    onChange={this.props.onChange}
                    defaultValue={this.props.defaultValue}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                    maxLength={this.props.maxLength}
                    minLength={this.props.minLength}
                    required={this.props.required}
                    type={this.props.type} />
            </div>
        );
    };
};
//*                                                                  *
//*==================================================================*
//*                                                                  *
export default customizedinput;
//*                                                                  *
//*==================================================================*