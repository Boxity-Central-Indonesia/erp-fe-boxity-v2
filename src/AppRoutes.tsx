import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Dashboard } from './pages/dashboard/Dashboard';
import { ProtectedRoute } from './components/commons/ProtectedRoute';
import { UnprotectedRoute } from './components/commons/UnProtectedRoute';
import { AuthLayouts } from './layouts/AuthLayout';
import { MainLayouts } from './layouts/MainLayouts';
import { Users } from './pages/users/Users';
import { Company } from './pages/companies/Company';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={
                <UnprotectedRoute>
                    <AuthLayouts>
                        <Login />
                    </AuthLayouts>
                </UnprotectedRoute>} />
            <Route path="/register" element={
                <UnprotectedRoute>
                    <AuthLayouts>
                        <Register />
                    </AuthLayouts>
                </UnprotectedRoute>} />
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <MainLayouts>
                            <Dashboard />
                        </MainLayouts>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/users"
                element={
                    <ProtectedRoute>
                        <MainLayouts>
                            <Users />
                        </MainLayouts>
                    </ProtectedRoute>
                }
            />
             <Route
                path="/companies"
                element={
                    <ProtectedRoute>
                        <MainLayouts>
                            <Company />
                        </MainLayouts>
                    </ProtectedRoute>
                }
            />
            {/* Rute lain bisa ditambahkan di sini */}
        </Routes>
    );
};
