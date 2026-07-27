import { Op } from 'sequelize'
import { sequelize } from '../../db/sequelize'
import { fields } from './RegistrationInstallment.fields'

// The second half of a seat bought on the payment plan. Its state is
// derived from the Stripe ids, never stored: an installment is **settled**
// once it carries a charge id, and **due** while it has none and its date
// has arrived. Query the scopes — never an inline null check.
export const RegistrationInstallment = sequelize.define(
  'registration_installment', fields,
  {
    tableName: 'registration_installment',
    timestamps: false,
    scopes: {
      settled: { where: { stripe_charge_id: { [Op.ne]: null } } },
      dueBy: (today) => ({
        where: { stripe_charge_id: null, due_on: { [Op.lte]: today } }
      })
    }
  }
)

RegistrationInstallment.associate = ({ Registration }) => {
  RegistrationInstallment.belongsTo(Registration, {
    foreignKey: 'registration_id', as: 'registration'
  })
}
