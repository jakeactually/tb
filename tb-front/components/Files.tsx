"use client";

import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

type File = { file: string, lines: Line[] };
type Line = { file: string, text: string, number: string, hex: string };

export function Files() {
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
      axios.get<File[]>('http://localhost:3001/files/data').then(res => setFiles(res.data));
    }, []);
  
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>File</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                </tr>
            </thead>
            <tbody>
            {files.flatMap(file =>
                file.lines.map(line => 
                    <tr>
                        <td>{line.file}</td>
                        <td>{line.text}</td>
                        <td>{line.number}</td>
                        <td>{line.hex}</td>
                    </tr>
                )
            )}
            </tbody>
        </Table>
    );
}
