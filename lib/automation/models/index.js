import { Automation } from './Automation'
import { AutomationRun } from './AutomationRun'

// Single wiring point for the automation domain.
Automation.associate({ AutomationRun })

export { Automation, AutomationRun }
