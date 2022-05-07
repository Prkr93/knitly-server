const patterns = [
  {
    '1': ['knit', 'purl', 'knit', 'purl', 'knit'],
    '2': ['purl', 'knit', 'purl', 'knit', 'purl'],
    '3': ['knit', 'purl', 'knit', 'purl', 'knit'],
    '4': ['purl', 'knit', 'purl', 'knit', 'purl'],
    '5': ['knit', 'purl', 'knit', 'purl', 'knit']
  },
  {
    '1': ['knit', 'knit', 'knit', 'knit', 'knit'],
    '2': ['purl', 'purl', 'purl', 'purl', 'purl'],
    '3': ['knit', 'knit', 'knit', 'knit', 'knit'],
    '4': ['purl', 'purl', 'purl', 'purl', 'purl'],
    '5': ['knit', 'knit', 'knit', 'knit', 'knit']
  },
  {
    '1': ['knit', 'purl', 'knit', 'purl', 'knit'],
    '2': ['knit', 'purl', 'knit', 'purl', 'knit'],
    '3': ['knit', 'purl', 'knit', 'purl', 'knit'],
    '4': ['knit', 'purl', 'knit', 'purl', 'knit'],
    '5': ['knit', 'purl', 'knit', 'purl', 'knit']
  },
  {
    '1':['knit','knit','purl white','k2tog white','ssk white','purl white','knit','knit'],
    '2':['knit','knit','k2tog white','knit','knit','ssk white','knit','knit'],
    '3':['purl white','k2tog white','purl white','k2tog white','ssk white','purl white','ssk white','purl white'],
    '4':['k2tog white','knit','k2tog white','purl white','purl white','ssk white','knit','ssk white'],
    '5':['cableSide2 white','knit','cableSide2 white','purl white','purl white','cableSide1 white','knit','cableSide1 white'],
    '6':['purl white','cableSide2 white','purl white','cableSide2 white','cableSide1 white','purl white','cableSide1 white','purl white'],
    '7':['knit white','knit white','cableSide2 white','knit white','knit white','cableSide1 white','knit white','knit white'],
    '8':['knit white','knit','purl white','cableSide2 white','cableSide1 white','purl white','knit','knit white']
  },
  {
    '1':['ssk white','ssk white','knit blue','purl white','knit white','purl white','knit blue','k2tog white','k2tog white'],
    '2':['knit blue','ssk white','ssk white','knit blue','purl white','knit blue','k2tog white','k2tog white','knit blue'],
    '3':['purl white','knit blue','ssk white','ssk white','knit blue','k2tog white','k2tog white','knit blue','purl white'],
    '4':['knit white','knit blue','k2tog white','knit blue','tta white','knit blue','ssk white','knit blue','knit white'],
    '5':['knit blue','k2tog white','knit blue','k2tog white','knit blue','ssk white','knit blue','ssk white','knit blue'],
    '6':['k2tog white','knit blue','k2tog white','knit blue','purl white','knit blue','ssk white','knit blue','ssk white'],
    '7':['ssk white','knit blue','cableSide2 white','knit blue','purl white','knit blue','cableSide1 white','knit blue','k2tog white'],
    '8':['knit blue','ssk white','knit blue','cableSide2 white','knit blue','cableSide1 white','knit blue','k2tog white','knit blue'],
    '9':['purl white','knit blue','ssk white','knit blue','cross white','knit blue','k2tog white','knit blue','purl white']
  },
  {
    '1':['cableSide2 green','purl blue','cableSide1 green','purl blue','ssk green','purl blue','k2tog green','purl blue','ssk green','purl blue','k2tog green','purl blue','cableSide2 green','purl blue','cableSide1 green'],
    '2':['purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue'],
    '3':['cableSide1 green','purl blue','cableSide2 green','purl blue','k2tog green','purl blue','ssk green','purl blue','k2tog green','purl blue','ssk green','purl blue','cableSide1 green','purl blue','cableSide2 green'],
    '4':['purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue'],
    '5':['cableSide2 green','purl blue','k2tog green','purl blue','cableSide2 green','purl blue','k2tog green','purl blue','ssk green','purl blue','cableSide1 green','purl blue','ssk green','purl blue','cableSide1 green'],
    '6':['purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue'],
    '7':['k2tog green','purl blue','cableSide2 green','purl blue','k2tog green','purl blue','cableSide2 green','purl blue','cableSide1 green','purl blue','ssk green','purl blue','cableSide1 green','purl blue','ssk green'],
    '8':['purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue'],
    '9':['ssk green','purl blue','k2tog green','purl blue','cableSide2 green','purl blue','cableSide1 green','purl blue','cableSide2 green','purl blue','cableSide1 green','purl blue','ssk green','purl blue','k2tog green'],
    '10':['purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue'],
    '11':['k2tog green','purl blue','ssk green','purl blue','cableSide1 green','purl blue','cableSide2 green','purl blue','cableSide1 green','purl blue','cableSide2 green','purl blue','k2tog green','purl blue','ssk green'],
    '12':['purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue'],
    '13':['ssk green','purl blue','cableSide1 green','purl blue','ssk green','purl blue','cableSide1 green','purl blue','cableSide2 green','purl blue','k2tog green','purl blue','cableSide2 green','purl blue','k2tog green'],
    '14':['purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue','knit green','purl blue','cross green','purl blue'],
    '15':['cableSide1 green','purl blue','ssk green','purl blue','cableSide1 green','purl blue','ssk green','purl blue','k2tog green','purl blue','cableSide2 green','purl blue','k2tog green','purl blue','cableSide2 green']
  },
  {
    '1':['ssk violet','purl violet','purl violet','knit indigo','purl violet','purl violet','k2tog violet'],
    '2':['yo violet','ssk violet','purl violet','knit indigo','purl violet','k2tog violet','yo violet'],
    '3':['knit indigo','yo violet','ssk violet','knit indigo','k2tog violet','yo violet','knit indigo'],
    '4':['knit indigo','purl indigo','yo violet','tta violet','yo violet','purl indigo','knit indigo'],
    '5':['knit indigo','yo violet','k2tog violet','knit indigo','ssk violet','yo violet','knit indigo'],
    '6':['yo violet','k2tog violet','purl violet','knit indigo','purl violet','ssk violet','yo violet'],
    '7':['k2tog violet','purl violet','purl indigo','knit indigo','purl indigo','purl violet','ssk violet']
  }
];



module.exports = patterns;
