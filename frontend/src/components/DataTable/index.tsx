import React from 'react';

const DataTable = () => {
  return (
    <div className="table-responsive">
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Vendedor</th>
                    <th>Clientes visitados</th>
                    <th>Negócios fechados</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>22/04/2021</td>
                    <td>Barry Allen</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
                <tr>
                    <td>22/04/2021</td>
                    <td>Bruce Wayne</td>
                    <td>24</td>
                    <td>35</td>
                    <td>16500.00</td>
                </tr>                <tr>
                    <td>22/04/2021</td>
                    <td>Clack Kent</td>
                    <td>40</td>
                    <td>22</td>
                    <td>22015.00</td>
                </tr>                <tr>
                    <td>25/05/2021</td>
                    <td>Hal Jordan</td>
                    <td>15</td>
                    <td>28</td>
                    <td>18100.00</td>
                </tr>                <tr>
                    <td>28/05/2021</td>
                    <td>ALan Scott</td>
                    <td>30</td>
                    <td>20</td>
                    <td>35045.00</td>
                </tr>                <tr>
                    <td>22/04/2021</td>
                    <td>Barry Allen</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default DataTable;