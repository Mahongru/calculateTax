var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ],
  }
];


function companySalesTax(salesData, taxRates) {
  // for ()

// find totalsale
// find totaltax
// combine them

}


// var results = salesTaxReport(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

function sum(acc, el) //Reducer
{
    return acc + el;
}

function aggregateSales(company)
{
  return {
    name: company.name,
    province: company.province,
    totalSales: company.sales.reduce(sum, 0)
  };
}

// const aggregateSales = company => ({
//   ...company,
//   totalSales: company.sales.reduce(sum, 0)
// });

function calculateTaxesForCompany(company)
{
  var taxRate = salesTaxRates[company.province] || 0.0;
  var totalTaxes = company.totalSales * taxRate;

  return {
    name: company.name,
    province: company.province,
    totalSales: company.totalSales,
    totalTaxes: totalTaxes
  }
}

// function calculateTaxesForCompany(company)
// {
//   var taxRate = salesTaxRates[company.province] || 0.0;
//   var totalTaxes = company.totalSales * taxRate;

//   return {
//     ...company,
//     totalTaxes
//   }
// }

function aggregateCompaniesByName(acc, company)
{
  if(!acc[company.name])
  {
    acc[company.name] = {
      totalSales: 0,
      totalTaxes: 0
    }
  }
  acc[company.name].totalSales += company.totalSales;
  acc[company.name].totalTaxes += company.totalTaxes;
  return acc;
}

var result =  companySalesData
                .map(aggregateSales)
                .map(calculateTaxesForCompany)
                .reduce(aggregateCompaniesByName, {})
              ;

console.log(result);