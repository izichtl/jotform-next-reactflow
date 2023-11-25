export const cleanString = (x: string): string => {
    const valueList = ["Equilíbrio", "Atenção","Alerta"]
    const stringList = [x.indexOf("equilibrada"), x.indexOf("atenção"), x.indexOf("alerta")]
    const getIndexOfValueList: any[] = stringList.map((response, index) => {
        if (response !== -1) return index
    })
    const response = getIndexOfValueList.filter(item => item !== undefined)
    return valueList[response[0]]
  } 