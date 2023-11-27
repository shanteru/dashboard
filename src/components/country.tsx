import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Progress } from "@/components/ui/progress"

  const countries = [
    {
      country: "US",
      progress: 44,
      sales: "324",
      total: "€17,320",
    },
    {
      country: "India",
      progress: 80,
      sales: "224",
      total: "€17,320",
    },
    {
      country: "Brazil",
      progress: 10,
      sales: "238",
      total: "€17,320",
    },
    
  ]
  
  export function CountryTable() {
    return (
      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Country</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Sales</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.country}>
              <TableCell className="font-medium">{country.country}</TableCell>
              <TableCell ><Progress value={country.progress} className="h-2 w-full" /></TableCell>
              <TableCell className="text-right">{country.sales}</TableCell>
              <TableCell className="text-right">{country.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  